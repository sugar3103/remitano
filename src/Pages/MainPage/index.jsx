function MainPage() {
  const getVideoList = localStorage.getItem("videoList");
  const videoList = JSON.parse(getVideoList);

  return (
    <div>
      <div className="">
        {videoList?.map((e) => (
          <div key={e?.id}>video </div>
        ))}
      </div>
      {(videoList || []).length === 0 ? (
        <h1 className="text-3xl font-bold">No video to show</h1>
      ) : null}
    </div>
  );
}

export default MainPage;
