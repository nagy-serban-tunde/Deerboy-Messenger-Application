import React, { Component } from 'react'

import chanel_image from '../images/chanel-image.png'
import people1 from '../images/people1.png'
import people2 from '../images/people2.png'
import people3 from '../images/people3.png'

export default class SidebarRight extends Component {

    constructor(props){
        super(props)
    }

    render() {
        
        const {store} = this.props;
        const activeChannel = store.getActiveChannel();
        const members = store.getMembersFromChannel(activeChannel);


        return <div className="sidebar-right">
                <div className = "chanel-image">
                    <img src={chanel_image} alt="Chanel avatar"  width="50" height="50" />
                </div>
                <h2 className="title">People</h2>
                <div className="members">

                    {members.map((member, key) =>{
                        return (
                            <div key={key} className="member">
                                <div className = "user-image">
                                    <img src={people1} alt="People 1" width="44" height="44"/>
                                    <span className = "status green"></span>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="member">
                        <div className = "user-image">
                            <img src={people2} alt="People 2" width="44" height="44"/>
                            <span className = "status yellow"></span>
                        </div>
                    </div>
                    <div className="member">
                        <div className = "user-image">
                            <img src={people3} alt="People 3" width="44" height="44"/>
                            <span className = "status green"></span>
                        </div>
                    </div> */}
                </div>
            </div>
                    
    }

}