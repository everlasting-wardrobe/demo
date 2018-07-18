import React from 'react';
import {Grid, Row, Col, ResponsiveEmbed} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  col:{
    display:'block',
    margin: 'auto',
  },
  iframeSize:{
    width: '100%',
  },
  grid:{
    height: '100vh',
  },
})

const HiwVideo = () => {
  return(
    <Grid className={css(styles.grid)}>
      <Col lg={8} lgOffset={2} md={8} mdOffset={2} sm={12} xs={12}>
        <ResponsiveEmbed a16by9={true}>
          <iframe title="hiw_video" className={css(styles.iframeSize)}
            src="https://www.youtube.com/embed/Tmg-iAECrnk?rel=0"
            allowfullscreen="">
          </iframe>
        </ResponsiveEmbed>
      </Col>
    </Grid>
  )
}



export default HiwVideo;
