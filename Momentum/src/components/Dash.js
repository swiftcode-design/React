import React from 'react';
import moment from 'moment';
function Dash(props){
  console.log(props)
  var date = new Date()
  const quoteNum = props.state.api.quotesNum
  return(
    <div className="component-entering vertical-space-between Dash">
      <div className="space-between">
        <div className="dash-links flex-start space-between">
          <p className="dash-links-anchor">Links</p>
          <div className="dash-links-search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input />
          </div>
        </div>
        <div className="dash-weather center column">
          <div  className="flex-start">
            {!props.state.api.icon_url.length
              ? null
              : <img alt="current weather" style={{width: '22px', height:'22px'}} src={props.state.api.icon_url}/>
            }
            <h3>{Math.floor(props.state.api.temp_c)}</h3>
              <i style={{height:'20px', fontSize:'6px'}} className="fa fa-circle-o" aria-hidden="true"></i>
          </div>
          <p>{props.state.api.city.toUpperCase()}</p>
        </div>
      </div>
      <div className="dash-main column flex-end">
        <div className='center dash-time'>
          <h1>{moment().format('h:mm')}</h1>
        </div>
        <div className="center-horizontal dash-name">
          <h2>Good evening, {props.state.user.name}.</h2>
        </div>
        {!props.state.user.focusSet ?
          <div className="center vertical-space-around dash-focus ">
            <h3 className="component-entering">What is your main focus today?</h3>
            <form name="focus" onSubmit={props.state.handleSubmit} className="center column">
              <input
                autoComplete="off"
                onChange={props.state.handleChange}
                value={props.state.user.focus}
                name="focus" className="login-input component-entering" />
            </form>
          </div>
          :
          <div className="center vertical-space-around dash-focus component-entering">
            <h4 className="component-entering">TODAY</h4>
            <div className="center component-entering">
              <h3>{props.state.user.focus}</h3>
              <div onClick={props.state.removeFocus} className="remove-icon-wrapper"><i className="fa fa-times" aria-hidden="true"></i></div>
            </div>
          </div>}

        <div className="flex-end column dash-quote">
          <div className="dash-quote-ul flex-end-vertical space-between ">
            <div className="center">
              <i onClick={props.state.showSettings} className={props.state.settings.show ? 'fa fa-cog spin' : 'fa fa-cog'} aria-hidden="true"></i>
              <p>{props.state.settings.backgrounds[props.state.settings.backgroundPos].place}</p>
            </div>
            <div className="dash-quote-div flex-end column">
              <h5>{`"${props.state.api.quotes[quoteNum][0]}"`}</h5>
              <h5 style={{paddingTop: '15px'}}>{`"${props.state.api.quotes[quoteNum][1]}"`}</h5>
            </div>
            <div>Todo</div>
          </div>
        </div>
      </div>
      <Settings state={props.state} />
    </div>
  )
}
export default Dash;
function Settings(props){
  console.log(props)
  return(
    <div className={props.state.settings.show ? 'dash-settings center settings-entering' : 'dash-settings center disabled'} >
      <div className="settings-controller">
        <ul>
          <li>General</li>
        </ul>
      </div>
      <div className="settings-display  wrap">
        {props.state.settings.backgrounds.map((background, idx) => {
          return <img key={idx} onClick={()=>props.state.changeBackground(idx)}  src={background.url} />
        })}
      </div>
    </div>
  )
}
