import React from 'react'
import RecipeReviewCard from './cards';



const arr = [
    {
      picUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQFfE4Hq5rW9mw/profile-displayphoto-shrink_800_800/0/1642867544414?e=1668038400&v=beta&t=vphWLQWZeqPbOpcYoAXfuel3NdFRZzyOkCJkBXxKYz0",
      name: "S.K Sharma",
      date: "07-12-2022",
      time: "4:30 pm",
      profession:
        "SDE(Seniour Developer Enginer),specility in (MERN),Java,Python,DSA(Data Strusters and Algorythum)!",
      location: "Delhi-NCR",
      tedx: "https://www.kiwismedia.com/storage/byte-contents/May2021/ddJX2Vc0RVStiyui8zdd.jpg",
      logo: "https://yt3.ggpht.com/a/AATXAJxe2Oep_m7lQ2xDIA42xu4-3YFq9t63qGJrggTp=s900-c-k-c0xffffffff-no-rj-mo",
      coder: "Coder Socity",
      onepara:
        "If your kids are eager to learn how to build websites, make mobile apps, or design their own video games, then check out these inspiring coding websites for kids (and classes).",
      twopara:
        "Even if they don’t grow up to become computer science or engineering superstars, they can still benefit from the problem-solving and math skills they’ll inevitably learn while taking these courses. Whether they’re eager to build their own video games, code their idea for a mobile app, or simply just learn how algorithms and structures work, these coding websites for kids can teach them these invaluable topics.",
      threepara:
        "One thing about online learning is the many hours staring at the computer screen. Blue light from electronics can cause eye strain, blurry vision, and dry eyes. It is even said to affect your sleep! Grab a pair of blue light glasses from GlassesUSA, one of our top picks for affordable eyewear. They always have great options for any budget. Save even more by shopping their sale section! This is a great time to get your kids some new spectacles!",
      fovrpara:
        "Is your laptop or PC filled with a lot of viruses, Defend yourself and the entire family with McAfee against the latest virus, malware, ransomware, and spyware threats while staying on top of your privacy and identity. McAfee Total Protection is easy to use, works for Mac, PC & mobile devices & is your best bet to stay safer online. Purchase trustworthy antivirus software now!",
      about:
        <b>S.K Sharma ('Shray'; born May 07, 2003) is an Indian media magnate, internet entrepreneur, and philanthropist. He is known for co-founding the social media website Coder Socity and its parent company Coder Platforms (formerly Coder Socity, Inc.), of which he is the chairman, chief executive officer, and controlling shareholder.</b>, 
      },
  ];


 function Blog() {
  return (
    <div className="Post">
    {arr.map((th, v) => {
      return (
        <RecipeReviewCard
          picUrl={th.picUrl}
          name={th.name}
          date={th.date}
          time={th.time}
          tedx={th.tedx}
          onepara={th.onepara}
          twopara={th.twopara}
          threepara={th.threepara}
          fovrpara={th.fovrpara}
          about={th.about}
          location={th.location}
          key={v}
        />
      );
    })}
  </div>
  )
}


export default Blog;