import {connect} from 'react-redux'

function Likes(props){

    return(
        <div className="button-controls">
            <button>❤{props.Likes}</button>
            <button>Dislike</button>
        </div>
    )

}



function mapStateToProps(state){
    return {
        likes: state.likes
    }
}

export default connect(mapStateToProps)(Likes)