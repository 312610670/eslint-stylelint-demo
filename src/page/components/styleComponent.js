import React from "react";

class StyTest extends React.Component{
    
    render() {
        return (
            <div className={"contenc"}>
                <div className={"title"}>我是一个标题</div>
                <div className={"dsc"}>这是一句描述</div>
                <style jsx >
                    {`
                        .contenc{
                            width: 500px;
                            background-color: red;
                            position: realtive;
                            font-size: 50px;
                            color: pink;
                        }
                        .title{
                            font-size:30px;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export  default StyTest;