import { useTheme } from '@mui/material';
import {
  Document,
  Font,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const BORDERBOTTOMWIDTH = '4px';
const styles = StyleSheet.create({
  body: {
    paddingTop: '35px',
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  gridContainer: { flexDirection: 'row', paddingHorizontal: 40 },
  content: { flexDirection: 'column', alignItems: 'flex-start', width: '50%' },
  title: {
    fontSize: 28,
    fontFamily: 'Oswald',
    padding: 0,
  },
  contentTitle: {
    fontSize: 14,
    borderBottomWidth: BORDERBOTTOMWIDTH,
    padding: '8px 0',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 12,
    margin: 0,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    borderRadius: '50%',
    height: '120px',
    width: '120px',
    objectFit: 'cover',
    marginRight: '70px',
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

export default function Quixote() {
  const color = useTheme().palette.primary.main;

  const firstColumn = (
    <View style={styles.content}>
      <Text style={{ ...styles.contentTitle, borderBottomColor: color }}>ABOUT ME</Text>
    </View>
  );

  const secondColumn = (
    <View style={styles.content}>
      <Text>ABout</Text>
    </View>
  );

  return (
    <PDFViewer width={'100%'} style={{ height: '90vh' }}>
      <Document style={{ padding: '10px' }}>
        <Page size={'A4'} style={styles.body}>
          <View style={styles.gridContainer}>
            <Image style={styles.image} src="/me.png" />
            <View>
              <Text style={styles.title}>Mohamed amine</Text>
              <Text style={styles.title}>Saoud</Text>
              <Text style={{ ...styles.subtitle, color }}>front end web developer</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            {firstColumn}
            {secondColumn}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
