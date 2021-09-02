export default function Footer() {
    return (
        <div className="bg-gray-900 mt-8">      
            <div className="flex justify-center"><a target="_blank" href="mailto:me@gmarr.com" className="text-gray-100 font-bold pt-5 hover:underline hover:cursor-pointer">me@gmarr.com</a></div>
            <div className="flex justify-center space-x-9 mt-5 pb-5">
              <div className="text-right"><a target="_blank" href="https://github.com/germarr/" className="text-gray-100 font-bold pt-5 hover:underline hover:cursor-pointer">Github</a></div>
              <div className="text-center"><a target="_blank" href="https://twitter.com/jerrypod/" className="text-gray-100 font-bold pt-5 hover:underline hover:cursor-pointer">Twitter</a></div>
              <div className="text-left"><a target="_blank" href="https://linkedin.com/in/martinezarroyogerardo" className="text-gray-100 font-bold pt-5 hover:underline hover:cursor-pointer">LinkedIn</a></div>
            </div>
          </div>
    )
}
