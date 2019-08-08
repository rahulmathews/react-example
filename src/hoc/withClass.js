import React, {Component} from 'react';

// const withClass = (WrappedComponent, Classes) => {
//     return (props) => (
//         <div className={Classes}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const withClass = (WrappedComponent, Classes) => {
    return class extends Component{
        render(){
            return (
                <div className={Classes}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClass;