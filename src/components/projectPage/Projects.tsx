import { Container, Theme, useMediaQuery } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PdfJs, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import type {
  ToolbarProps,
  ToolbarSlot,
  TransformToolbarSlot,
} from '@react-pdf-viewer/toolbar';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

export const Projects = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const url = 'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';
  const zoomLevels = [0.5, 0.75, 1, 1.25, 1.5, 2.0, 3.0, 4.0];

  const viewerRef = React.useRef<HTMLDivElement>(null);
  const MIN_ZOOM_LEVEL = 50;
  const MAX_ZOOM_LEVEL = 400;

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
      <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
    ),
    sidebarTabs: defaultTabs => [defaultTabs[0]],
  });

  const { renderDefaultToolbar } =
    defaultLayoutPluginInstance.toolbarPluginInstance;

  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => {
    const { Zoom } = slot;
    return Object.assign({}, slot, {
      Zoom: () => <Zoom levels={zoomLevels} />,
      Open: () => <></>,
      Download: () => <></>,
      Print: () => <></>,
      SwitchTheme: () => <></>,
    });
  };

  const zoomPluginInstance = zoomPlugin({
    enableShortcuts: false,
  });
  const { zoomTo } = zoomPluginInstance;

  // Zooming only in a range of 50% - 400%
  React.useEffect(() => {
    const zoomDisplayElement = viewerRef.current?.querySelector(
      '[data-testid="zoom__popover-target-scale"]',
    );

    const adjustZoomLevel = () => {
      const zoomText = zoomDisplayElement?.textContent?.replace('%', '');
      const zoomValue = zoomText ? parseInt(zoomText, 10) : 0;

      if (zoomValue < MIN_ZOOM_LEVEL) {
        zoomTo(MIN_ZOOM_LEVEL / 100);
      } else if (zoomValue > MAX_ZOOM_LEVEL) {
        zoomTo(MAX_ZOOM_LEVEL / 100);
      }
    };

    const observer = new MutationObserver(mutations => {
      mutations.forEach(adjustZoomLevel);
    });

    if (zoomDisplayElement) {
      observer.observe(zoomDisplayElement, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, [zoomTo]);

  // Handling zooming with ctrl + mouse wheel and set zoom % / scroll
  React.useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        event.stopPropagation();

        const zoomDisplayElement = viewerRef.current?.querySelector(
          '[data-testid="zoom__popover-target-scale"]',
        );
        const zoomText = zoomDisplayElement?.textContent?.replace('%', '');
        const currentZoom = zoomText ? parseInt(zoomText, 10) : 100;

        const zoomChange = event.deltaY > 0 ? -2 : 2;
        let newZoom = currentZoom + zoomChange;

        newZoom = Math.max(newZoom, MIN_ZOOM_LEVEL);
        newZoom = Math.min(newZoom, MAX_ZOOM_LEVEL);

        zoomTo(newZoom / 100);
      }
    };

    const pdfViewerElement = document.getElementById('pdfViewer');

    if (pdfViewerElement) {
      pdfViewerElement.addEventListener('wheel', handleWheel, true);
    }

    return () => {
      if (pdfViewerElement) {
        pdfViewerElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [zoomTo]);

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: isSmallScreen ? 2 : 4 }}>
        <Worker workerUrl={url}>
          <Accordion
            defaultExpanded
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{ p: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Design Project
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Design project has been done during the course of 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography> */}
              <Viewer
                enableSmoothScroll={true}
                fileUrl={
                  process.env.NODE_ENV === 'production'
                    ? '/milaulenius/public/demo.pdf'
                    : '/demo.pdf'
                }
                defaultScale={SpecialZoomLevel.PageWidth}
                plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
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
          <Accordion
            sx={{ p: 2 }}
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Design Project
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Design project has been done during the course of 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Viewer
                enableSmoothScroll={true}
                fileUrl={
                  process.env.NODE_ENV === 'production'
                    ? '/milaulenius/public/demo.pdf'
                    : '/demo.pdf'
                }
                defaultScale={SpecialZoomLevel.PageWidth}
                plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
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
          <Accordion
            sx={{ p: 2 }}
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Design Project
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Design project has been done during the course of 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Viewer
                enableSmoothScroll={true}
                fileUrl={
                  process.env.NODE_ENV === 'production'
                    ? '/milaulenius/public/demo.pdf'
                    : '/demo.pdf'
                }
                defaultScale={SpecialZoomLevel.PageWidth}
                plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
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
          <Accordion
            sx={{ p: 2 }}
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Design Project
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Design project has been done during the course of 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Viewer
                enableSmoothScroll={true}
                fileUrl={
                  process.env.NODE_ENV === 'production'
                    ? '/milaulenius/public/demo.pdf'
                    : '/demo.pdf'
                }
                defaultScale={SpecialZoomLevel.PageWidth}
                plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
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
      </Container>
    </>
  );
};

export default Projects;
