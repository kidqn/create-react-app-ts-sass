import * as React from 'react';
import './Header.scss';

class Header extends React.Component<any,any>{
    render (){
        return (
            <div className="Header">
                <span>
                    <div className="Header-title">Best statement collections</div>
                    <div className="Header-desc">
                        <span>Work</span><span>The</span><span>Color</span>
                    </div>
                </span>
            </div>
        )
    }
}
export default Header;