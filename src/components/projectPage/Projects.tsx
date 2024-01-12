import { Container, Fab, Theme, useMediaQuery } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PdfJs, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const Projects = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const url = 'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: isSmallScreen ? 2 : 4 }}>
        <Worker workerUrl={url}>
          <Accordion sx={{ p: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: '45%',
                  flexShrink: 0,
                  textTransform: 'uppercase',
                }}
              >
                First Aid
              </Typography>
              <Typography
                sx={{ color: 'text.secondary', textTransform: 'uppercase' }}
              >
                First Aid AW24/25 Collection and Sustainability
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflow: 'hidden' }}>
              <Viewer
                enableSmoothScroll={true}
                fileUrl={
                  process.env.NODE_ENV === 'production'
                    ? '/milaulenius/Portfolio_syksy2023_valmis.pdf'
                    : '/Portfolio_syksy2023_valmis.pdf'
                }
                defaultScale={SpecialZoomLevel.PageWidth}
                transformGetDocumentParams={(
                  options: PdfJs.GetDocumentParams,
                ) =>
                  Object.assign({}, options, {
                    verbosity: 0,
                  })
                }
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ p: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{ width: '45%', flexShrink: 0, textTransform: 'uppercase' }}
              >
                Tech Packs / Spec's
              </Typography>
              <Typography
                sx={{ color: 'text.secondary', textTransform: 'uppercase' }}
              >
                Charlie, Shirt
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflow: 'hidden' }}>
              <Viewer
                enableSmoothScroll={true}
                fileUrl={
                  process.env.NODE_ENV === 'production'
                    ? '/milaulenius/SPECs_viimeistelty.pdf'
                    : '/SPECs_viimeistelty.pdf'
                }
                defaultScale={SpecialZoomLevel.PageWidth}
                transformGetDocumentParams={(
                  options: PdfJs.GetDocumentParams,
                ) =>
                  Object.assign({}, options, {
                    verbosity: 0,
                  })
                }
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ p: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{ width: '45%', flexShrink: 0, textTransform: 'uppercase' }}
              >
                Miesten vaatteiden sarjonta
              </Typography>
              <Typography
                sx={{ color: 'text.secondary', textTransform: 'uppercase' }}
              >
                tuotanto- ohjeistus ja mitoitus
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ overflow: 'hidden' }}>
              <Viewer
                enableSmoothScroll={true}
                fileUrl={
                  process.env.NODE_ENV === 'production'
                    ? '/milaulenius/sarjontakurssi_2023.pdf'
                    : '/sarjontakurssi_2023.pdf'
                }
                defaultScale={SpecialZoomLevel.PageWidth}
                transformGetDocumentParams={(
                  options: PdfJs.GetDocumentParams,
                ) =>
                  Object.assign({}, options, {
                    verbosity: 0,
                  })
                }
              />
            </AccordionDetails>
          </Accordion>
        </Worker>
        <Fab
          aria-label="add"
          sx={{
            position: 'fixed',
            bottom: isSmallScreen ? 16 : 32,
            right: isSmallScreen ? 16 : 32,
            color: '#424242',
            backgroundColor: 'white',
          }}
          size="small"
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon />
        </Fab>
      </Container>
    </>
  );
};

export default Projects;
