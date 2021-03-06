import React from 'react';

import {Container,SliderWrapper,Slider,Time} from './styles'

import { timeMusic,minutosCont} from '../../redux/actions/playerAction';
import { connect} from 'react-redux';

const TimerMusic = (props) =>{

  setInterval(()=>{
        sound.getCurrentTime((seconds)=>{
          props.timeMusic(parseInt(seconds));
        });
      },1000);

    return(
        <Container>
        <SliderWrapper>
        <Time>{props.minutos}:{props.currentTimePlayer}</Time>
        <Slider
        step={0}
        maximumValue={sound.getDuration()}
        onValueChange={(time) => sound.setCurrentTime(time)}
        value={parseInt(props.currentTimePlayer)}
        minimumTrackTintColor="#14142c"
        thumbTintColor="#14142c"
        />
        <Time>{parseInt(sound.getDuration())}</Time>
        </SliderWrapper>
        </Container>
    );
}
const mapStateToProps = state => ({
    currentTimePlayer: state.PlayerReducer.currentTimePlayer,
    durationMusic:state.PlayerReducer.durationMusic,
    minutos:state.PlayerReducer.minutos
  });
export default connect(mapStateToProps,{
    timeMusic,
    minutosCont
})(TimerMusic);;
