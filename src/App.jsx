import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px]
       px-10 py-2 text-4xl font-bold ">
      RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>

  );
}

//this is a project to create custom react hooks
//react hooks are a util func to perform tasks..
//usestate manages state..usenavigate helps in navigation on dif dif routes..useeffect performs tasks after render
//we can also create custom hooks to customize ip, output and what hook does
//XC2lYr1su59ATkT4J32E2tXwNI3DH4SR mine
//kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S
//npm install..npm i axios to make http request/api call in place of fetch, its more secure
//in fetch we had to convert data to json by passing but in axios its not so...npm run start
//we have got API KEY from developers.giphy.com
//top level component wrapper(app.js) which has dotted bkgrnd set in app.js...a heading of full wudth bkg white text black border rounded
//2 components..one generates gif randomly..other on basis of tags..hence total 3 cmpntn under app.js..heading, random,tag

//heading followed by random nd tag cmp flex column div
//2 compnts random.js tag.js and imported in app.js
//rounded-lg has been imported from tailwind