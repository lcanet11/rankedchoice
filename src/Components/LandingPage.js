import React, { Children } from 'react'
import './styles/LandingPage.css'
import mainpic from './images/MainPic.png'
import starstop from './images/starstop.png'
import bottompic from './images/bottompic.png'
import starsbottom from './images/starsbottom.png'
import lgpic from './images/lgpic.png'
import video from './images/video.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import icon5 from './images/icon5.png'
import facebook from './images/facebook.png'

function LandingPage(){
    return (
    <div className='mainpic'>
        <img 
        src={mainpic}
        style={{flex:1, alignSelf: 'stretch', height:undefined, width:undefined}}
        resizeMode='contain'
        width='1715'
        // height='1000'
        className='landing'
        alt='landing pic 1'
      />
      <div className='maintext'>
      <p>CHANGE YOUR VOTE <br/>IF YOU CHANGE YOUR MIND</p>
      <p className='this'>
      <row>THIS</row>
      <row className='democracy'>is democracy</row>
      </p>
      <row className='phrase'>Before the primaries start, make your voice heard!<br/>
      <button className='button'>VOTE NOW</button>
      </row>
      </div>
      <div>
        <img 
        src={starstop}
        width='1715'
        className='starstop'
        alt='starstop'
        />
      </div>
      <div>
        <img 
        src={bottompic}
        width='1715'
        className='starstop'
        alt='bottompic'
        />
      </div>
      <div>
        <img 
        src={starsbottom}
        width='1715'
        className='starstop'
        alt='starsbottom'
        />
        </div>
        <div>
        <p className='fuller'>"You never change<br/>
        things by fighting<br/>
        reality. To change<br/>
        something,<br/>
        build a new model<br/>
        that makes<br/>
        the existing model<br/>
        obsolete."<br/>
        <p className='quote'>- R.Buckminster Fuller</p>
        </p>
        <img 
        src={video}
        className='video'
        alt='video'
        />

        <div className='icons'>
            <div className='icon1format'>
            <img src={icon1}
            className='icon1'
            alt='icon1'/>
            <h3 className='h3'>Spoiler Free</h3>
            <p className='icon_par'>Vote for the candidate<br/>you want most, without<br/>
            handing the election to<br/> someone you want least</p>
            </div>  
            <div className='icon2format'>
            <img src={icon2}
            className='icon2'
            alt='icon2'/>
            <h3 className='h3'>Radically Simple</h3>
            <p className='icon_par'>If a candidate would beat<br/>every other candidate in<br/>
            a two-way race, that <br/>candidate wins the election</p>
            </div> 
            
            <div className='icon3format'>
            <img src={icon3}
            className='icon3'
            alt='icon3'/>
            <h3 className='h3'>Verifiable</h3>
            <p className='icon_par'>Know for sure that your<br/>vote was counted<br/>
            accurately</p>
            </div> 

            <div className='icon4format'>
            <img src={icon4}
            className='icon4'
            alt='icon4'/>
            <h3 className='h3'>Online</h3>
            <p className='icon_par'>No long lines<br/>No voting-day confusion.<br/>
            No systematic<br/>discrimination.</p>
            </div> 

            <div className='icon5format'>
            <img src={icon5}
            className='icon5'
            alt='icon5'/>
            <h3 className='h3'>Authentic</h3>
            <p className='icon_par'>Vote according to<br/>your true preferences,<br/>
            without worrying<br/>about strategy</p>
            </div> 
        </div>
        <div className='finalquote'>
        <p>THE WAY ELECTIONS SHOULD BE</p>
        <img 
        src={lgpic}
        width='1715'
        className='lgpic'
        alt='lgpic'
        />
        </div>
      </div>
      <div className='footer'>
        <div className='logoarea' href="#home">
          <img 
              src='favicon.ico'
              width='100'
              height='100'
              className='logo'
             alt='React Bootstrap logo'
            />  
          <div className='brandbot'>  
          NATIONAL
          <br/>
          RANKED
          <br/>
          CHOICE
          <br/>
           VOTE
        </div>
        <p className='bottomcenter'>
            BUILT FOR YOU<br/>
            as a labor of love by software<br/>
            engineers, artists and social<br/>
            entrepreneurs in our<br/>
            spare time, in New Haven, CT.
        </p>
        <div className='fb'>
            <p>FOLLOW US ON</p>
            <img 
              src={facebook}
              width='100'
              height='100'
              className='facebook'
             alt='facebook logo'
            />  
        </div>
       
        </div>
      </div>
    </div>
    )
}

export default LandingPage