import React, { Component } from "react"

class MemeGenerator extends Component{
    constructor(){
        super()

        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                //jsonオブジェクトのdataプロパティからmemesを取得できる
                const {memes} = response.data
                //３つのプロパティを持っていることがわかる。
                //id: "112126428", name: "Distracted Boyfriend", url: "https://i.imgflip.com/1ur9b0.jpg"
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            }) 
    }

    handleChange(event){
        const {name, value} = event.target
        //computed property
        this.setState({[name] : value})
    }

    //onClickよりも、onSubmitの方が好ましい。
    handleSubmit(event){
        //操作固有のデフォルトの挙動をブロックする。
        //この場合、onSubmitのデフォルト動作が行われないようにしている。
        //画像を変更するには必ず呼ぶ必要が有る。
        event.preventDefault()

        //memeの画像の中から、ランダムに一つ画像を選ぶ
        const length = this.state.allMemeImgs.length
        const index = Math.floor(Math.random() * (length - 1))
        const img = this.state.allMemeImgs[index]

        this.setState({randomImage: img.url})
    }

    render(){
        return(
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='topText'
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'    
                        name='bottomText'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImage} alt="" />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator