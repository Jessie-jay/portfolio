import React from 'react';
// import ReactDOM from 'react-dom';


class TryMoi extends React.Component {
   state = {
       count: 0,
    //    tags: []
    }
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
        // renderTags() {
        //     if (this.state.tags.length === 0) return <p>There are no tags</p> ;
        //     return  <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        // } 
        handleIncrement = () => {
           this.setState({ count: this.state.count +1 })
        } 
    render() { 
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"
       
        return (
        <div>
            <span className={ classes }>{this.formatCount()}</span> 
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            {/* {this.state.tags.length === 0 && 'Please add a new tag'} 
           {this.renderTags()}  */}
        </div>
        );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}
 
export default TryMoi;