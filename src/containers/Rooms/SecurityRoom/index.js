/* eslint-disable react/display-name */
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { Image, Layer, Stage, Star, Text } from 'react-konva';
import { useNavigate } from 'react-router-dom';
import useImage from 'use-image';

import MessageSeries from './MessageSeries';
import URLImage from '../../../components/Konva/URLImage';
import Layout from '../../../components/organism/Layout';
import ItemImage from '../../../components/molecules/konva/Item';
import SubmitAnswer from '../../../components/Dialog/SubmitAnswer';
import ImageDialog from '../../../components/Dialog/Image';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);

  const BACKGROUND_IMAGE = '/security_room/security-empty.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/security_room/satl.png',
      id: 0,
      x: 605,
      y: 1425,
      isHover: false,
      onClick: () => {
        setOpenDialog2(true);
      }
    },
    {
      urlImage: process.env.PUBLIC_URL + '/security_room/komod.png',
      id: 1,
      x: 2200,
      y: 680,
      isHover: false,
      onClick: () => {
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/security_room/Tablo.png',
      id: 2,
      x: 319,
      y: 1013,
      isHover: false,
      onClick: () => { },
    },
  ]);

  const goForward = (dst) => {
    navigate(dst);
  };

  const handleMouseEnter = (e) => {
    const id = e.target.id();
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isHover: star.id === id,
        };
      })
    );
  };

  const handleMouseExit = (e) => {
    setObjects(
      objects.map((star) => {
        return {
          ...star,
          isHover: false,
        };
      })
    );
  };

  return (
    <Layout backgroundImage={BACKGROUND_IMAGE}>
      <Stage
        width={Math.min(image?.width * scaleY, window.innerWidth)}
        height={window.innerHeight}>
        <Layer
          draggable
          dragBoundFunc={(pos) => {
            pos.y = 0;
            if (window.innerWidth < image?.width * scaleY) {
              if (pos.x > 0) pos.x = 0;
              if (pos.x < window.innerWidth - image?.width * scaleY)
                pos.x = window.innerWidth - image?.width * scaleY;
            } else {
              pos.x = 0;
            }
            return pos;
          }}>
          <URLImage
            scaleX={scaleY}
            scaleY={scaleY}
            src={process.env.PUBLIC_URL + BACKGROUND_IMAGE}
          />
          {objects.map((object) => (
            <ItemImage
              key={object.id}
              object={object}
              parentScale={scaleY}
              handleMouseEnter={handleMouseEnter}
              handleMouseExit={handleMouseExit}
            />
          ))}
        </Layer>
      </Stage>
      <MessageSeries />
      <SubmitAnswer
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
      />
      <ImageDialog
        open={openDialog2}
        handleClose={() => setOpenDialog2(!openDialog2)}
        image={'/first_image.jpg'}
      />
    </Layout>
  );
};


export default Index;
