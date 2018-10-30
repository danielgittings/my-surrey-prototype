import React, { lazy, Suspense } from 'react';

const Event = lazy(() => import('./Event'));
const Article = lazy(() => import('./Page'));

const Page = (props) => {
  // let Component;

  // if (urlSegmentFirst === 'events' && urlSegmentSecond) {
  //    Component = Event;
  // } else {
  //    Component = Article;
  // }

  console.log(props.location.pathname);



  return (
    <>
      <Suspense fallback={<div>...Lazy loading via suspense</div>}>
        {/* <Component urlSegmentFirst={urlSegmentFirst} urlSegmentSecond={urlSegmentSecond} /> */}
      </Suspense>
    </>
  )
}

export default Page;
