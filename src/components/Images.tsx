import {
  ImageList,
  ImageListItem,
  Box,
  Typography,
  Dialog,
  DialogContent,
  Grid,
  Paper,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/system';
import { useState } from 'react';
import { grey } from '@mui/material/colors';

interface Item {
  img: string;
  title: string;
  year: string;
  description?: string;
  color1?: string;
  color2?: string;
  color3?: string;
}

export default function PortfolioImages() {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const greyishFontColor = grey[800];

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageFadeIn, setImageFadeIn] = useState(false);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  const handleOpenDialog = (item: Item) => {
    setCurrentItem(item);
    setOpenDialog(true);
    setTimeout(() => {
      setImageFadeIn(true);
    }, 100);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setImageFadeIn(false);
  };

  return (
    <>
      <ImageList variant="masonry" cols={isSmallScreen ? 1 : 3} gap={20}>
        {itemData.map(item => {
          return (
            <ImageListItem
              key={item.img}
              onClick={() => handleOpenDialog(item)}
              sx={{
                overflow: 'hidden',
                borderRadius: '2%',
                position: 'relative',
                '&:hover .overlay': {
                  opacity: 1,
                },
                cursor: 'pointer',
              }}
            >
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                onLoad={() => setIsLoaded(true)}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 1.5s',
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent grey
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="body1" color="white">
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" color="white">
                  {item.year}
                </Typography>
              </Box>
            </ImageListItem>
          );
        })}
      </ImageList>
      {currentItem && (
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          fullScreen={isSmallScreen}
        >
          <DialogContent sx={{ p: 0 }}>
            <Grid container direction="row">
              <Grid item xs={12} md={6} p={4}>
                <img
                  src={currentItem.img}
                  alt={currentItem.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    opacity: imageFadeIn ? 1 : 0,
                    transform: imageFadeIn
                      ? 'translateY(0)'
                      : 'translateY(-20px)',
                    transition: 'opacity 1.5s, transform 1.5s',
                  }}
                />

                <Grid
                  container
                  justifyContent="space-around"
                  spacing={1}
                  pt={4}
                >
                  <Grid
                    item
                    style={{
                      opacity: imageFadeIn ? 1 : 0,
                      transition: 'opacity 1.5s ease-in-out',
                      transitionDelay: imageFadeIn ? '0.3s' : '0s',
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: currentItem.color1,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{
                      opacity: imageFadeIn ? 1 : 0,
                      transition: 'opacity 1.5s ease-in-out',
                      transitionDelay: imageFadeIn ? '0.6s' : '0s',
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: currentItem.color2,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{
                      opacity: imageFadeIn ? 1 : 0,
                      transition: 'opacity 1.5s ease-in-out',
                      transitionDelay: imageFadeIn ? '0.9s' : '0s',
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: currentItem.color3,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  backgroundColor: '#EEEEEE',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <IconButton
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    right: isSmallScreen ? -1 : 8,
                    top: isSmallScreen ? -1 : 8,
                    color: greyishFontColor,
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Stack spacing={3} p={4}>
                  <Typography
                    sx={{
                      opacity: imageFadeIn ? 1 : 0,
                      transform: imageFadeIn
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                      transition: 'opacity 1.5s, transform 1.5s',
                      transitionDelay: imageFadeIn ? '0.3s' : '0s',
                    }}
                    variant="h6"
                  >
                    {currentItem.title}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: imageFadeIn ? 1 : 0,
                      transform: imageFadeIn
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                      transition: 'opacity 1.5s, transform 1.5s',
                      transitionDelay: imageFadeIn ? '0.6s' : '0s',
                    }}
                    variant="body1"
                  >
                    {currentItem.year}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: imageFadeIn ? 1 : 0,
                      transform: imageFadeIn
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                      transition: 'opacity 1.5s, transform 1.5s',
                      transitionDelay: imageFadeIn ? '0.9s' : '0s',
                    }}
                    variant="body2"
                  >
                    {currentItem.description}
                  </Typography>
                </Stack>
                <Box p={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    onClick={handleCloseDialog}
                    variant="text"
                    size="large"
                    sx={{
                      color: greyishFontColor,
                      '&:hover': {
                        backgroundColor: grey[300],
                      },
                    }}
                  >
                    Close
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
const itemData: Item[] = [
  /* ======  1. COLUMN  ====== */
  {
    img: '../../public/rolf_ekroth_ss2440265_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#6c696b',
    color2: '#b9c2ca',
    color3: '#340e0f',
  },
  {
    img: '../../public/rolf_ekroth_ss2440782_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#61656f',
    color2: '#a3b1be',
    color3: '#371717',
  },
  {
    img: '../../public/rolf_ekroth_ss2441462_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#ab0c00',
    color2: '#d92501',
    color3: '#6d0100',
  },

  /* ======  2. COLUMN  ====== */
  {
    img: '../../public/rolf_ekroth_ss2440417_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#6a737c',
    color2: '#aebcc9',
    color3: '#1e1820',
  },
  {
    img: '../../public/rolf_ekroth_ss2440850_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#667380',
    color2: '#b3c0cc',
    color3: '#391b1c',
  },
  {
    img: '../../public/rolf_ekroth_ss2441555_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#d52900',
    color2: '#7a0d05',
    color3: '#9c8e66',
  },

  /* ======  3. COLUMN  ====== */
  {
    img: '../../public/rolf_ekroth_ss2440736_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#696d77',
    color2: '#b1beca',
    color3: '#3c1a1c',
  },
  {
    img: '../../public/rolf_ekroth_ss2439902_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#372225',
    color2: '#6b717a',
    color3: '#3c1c1d',
  },
  {
    img: '../../public/rolf_ekroth_ss2442102_final_lores.jpg',
    title: 'The dress is Designed and Sewed by Mila Ulenius',
    year: 'Rolf Ekruth SS24 Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, libero quis pulvinar lobortis, neque erat pharetra elit, quis volutpat arcu lacus in neque. Integer in libero id ligula gravida iaculis et non nulla. Sed vitae lectus lectus. Proin lobortis, est a auctor efficitur, purus magna maximus nibh, ac semper massa erat nec dui. Aenean aliquam vitae lorem tincidunt porttitor.',
    color1: '#6e0703',
    color2: '#bc1c02',
    color3: '#dc4817',
  },
];
