import React from 'react';
import { Layer, Stage } from 'react-konva';
import { useNavigate } from 'react-router-dom';
import useImage from 'use-image';

import GetProblem from '../../components/Dialog/GetProblem'
import URLImage from '../../components/Konva/URLImage';
import Layout from '../../components/organism/Layout';
import ItemImage from '../../components/molecules/konva/Item';

const Index = () => {
  let navigate = useNavigate();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [groupProblemId, setGroupProblemId] = React.useState();
  const BACKGROUND_IMAGE = '/greece/empty-room.png';
  const [image] = useImage(process.env.PUBLIC_URL + BACKGROUND_IMAGE);
  const scaleY = window.innerHeight / image?.height;
  const [objects, setObjects] = React.useState([
    {
      urlImage: process.env.PUBLIC_URL + '/greece/aristotle.png',
      id: 0,
      x: 144,
      y: 428,
      isHover: false,
      onClick: () => {
        setGroupProblemId(3);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/greece/olive.png',
      id: 1,
      x: 410,
      y: 560,
      isHover: false,
      onClick: () => {
        setGroupProblemId(21);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/greece/olympics.png',
      id: 3,
      x: 400,
      y: 200,
      isHover: false,
      onClick: () => {
        setGroupProblemId(16);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/greece/scales.png',
      id: 4,
      x: 948,
      y: 515,
      isHover: false,
      onClick: () => {
        setGroupProblemId(38);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/greece/vase.png',
      id: 5,
      x: 680,
      y: 480,
      isHover: false,
      onClick: () => {
        setGroupProblemId(2);
        setOpenDialog(true);
      },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/greece/door.png',
      id: 6,
      x: 1338,
      y: 748,
      disabled: true,
      isHover: false,
      onClick: () => { },
    },
    {
      urlImage: process.env.PUBLIC_URL + '/greece/greece frame.png',
      id: 7,
      x: 1230,
      y: 235,
      disabled: true,
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
      <GetProblem
        open={openDialog}
        handleClose={() => setOpenDialog(!openDialog)}
        problemGroupId={groupProblemId}
      />
    </Layout>
  );
};

export default Index;
