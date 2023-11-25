import emailjs from '@emailjs/browser';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Stack, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  subject: Yup.string().required('Subject is required'),
  fullName: Yup.string().required('Full name is required'),
  senderMail: Yup.string().email().required('Email is required'),
  content: Yup.string().required('Content is required'),
});

export default function ContactMe() {
  const { breakpoints } = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const isMobile = useMediaQuery(breakpoints.only('xs'));
  const fieldSize = isMobile ? 'small' : 'medium';

  const formik = useFormik({
    initialValues: {
      subject: '',
      senderMail: '',
      fullName: '',
      content: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      emailjs.send('service_mf63rmf', 'template_pebeznp', values, '6v5cEUoEJm6khhUo4').then(
        () => {
          enqueueSnackbar('Your email has been sent successfully! 🚀', {
            variant: 'success',
          });
          resetForm();
        },
        () => {
          enqueueSnackbar('Error sending email. Please try again. 🛑', {
            variant: 'error',
          });
        }
      );
    },
  });

  const { getFieldProps, errors, touched, isSubmitting } = formik;

  console.log(isSubmitting);

  return (
    <FormikProvider value={formik}>
      <Form>
        <Box py={2}>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} mb={2}>
            <TextField
              fullWidth
              size={fieldSize}
              label="Full Name"
              {...getFieldProps('fullName')}
              error={Boolean(touched.fullName && errors.fullName)}
              helperText={touched.fullName && errors.fullName}
            />
            <TextField
              fullWidth
              size={fieldSize}
              label="Subject"
              {...getFieldProps('subject')}
              error={Boolean(touched.subject && errors.subject)}
              helperText={touched.subject && errors.subject}
            />
          </Stack>
          <TextField
            fullWidth
            size={fieldSize}
            label="Email"
            sx={{ mb: 2 }}
            {...getFieldProps('senderMail')}
            error={Boolean(touched.senderMail && errors.senderMail)}
            helperText={touched.senderMail && errors.senderMail}
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            fullWidth
            size={fieldSize}
            rows={4}
            sx={{ mb: 2 }}
            {...getFieldProps('content')}
            error={Boolean(touched.content && errors.content)}
            helperText={touched.content && errors.content}
          />
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Button
              disabled={isSubmitting}
              type="submit"
              size={fieldSize === 'medium' ? 'large' : 'medium'}
              sx={{ color: 'primary.main' }}
              variant="outlined"
            >
              clear form
            </Button>
            <LoadingButton
              loading={isSubmitting}
              type="submit"
              size={fieldSize}
              variant="contained"
            >
              submit form
            </LoadingButton>
          </Stack>
        </Box>
      </Form>
    </FormikProvider>
  );
}
