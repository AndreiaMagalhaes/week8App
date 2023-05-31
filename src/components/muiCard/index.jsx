import "./index.css"
import Image from "mui-image"
import { Stamp } from "../stamp"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Container } from '@mui/material'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  export function MuiCard({ user }) {
    const [expanded, setExpanded] = React.useState(false);
    const { name, department, grade, imgSrc, wish, sender } = user;
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card mx={{ minWidth: 400, height: 500, maxWidth: 400, minHeight:500}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
        <div className="addresse_infos">
            <div className="infos">
                <div className="name">{name}</div>
                <div className="department">{department + " " + grade}</div>
            </div>                    
            <div className="photo">
                <div className="photo_content" />
            </div>
        </div>
        </Box>
        <Stamp/>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
            <div className="message_part">
                    <div className="years">
                        <div className="year1_bgd">
                            <div className="year1_text">2019</div>
                        </div>
                        <div className="year2_bgd">
                            <div className="year2_text">2023</div>
                        </div>  
                    </div>
                </div>
            <Typography paragraph>
            <div className="wish">{wish + " - " + sender}</div>
            </Typography>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    );
  }



function Card2({ user }) {
    const { name, department, grade, imgSrc, wish, sender } = user
    
    return (
        <div className="card">
            <div className="card-content">
                <div className="addresse_infos">
                    <div className="infos">
                        <div className="name">{name}</div>
                        <div className="department">{department + " " + grade}</div>
                    </div>                    
                    <div className="photo">
                        <div className="photo_content" />
                    </div>
                </div>
                <Stamp/>
                <div className="message_part">
                    <div className="years">
                        <div className="year1_bgd">
                            <div className="year1_text">2019</div>
                        </div>
                        <div className="year2_bgd">
                            <div className="year2_text">2023</div>
                        </div>  
                    </div>
                    <div className="wish">{wish + " - " + sender}</div>
                </div>
            </div>
        </div>

  
    )
  }





