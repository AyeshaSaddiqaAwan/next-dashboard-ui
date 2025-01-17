const Announcement = () => {
    return (
      <div className='bg-white p-4 rounded-md'>
          <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Announcement</h1>
              <span className="text-xs text-gray-400">View All</span>
          </div>
          <div className="flex flex-col gap-4 mt-4">
              <div className="bg-SkyLight rounded-md p-4">
                  <div className="flex item-center justify-between">
                      <h2 className="font-medium">Winter Break Announcement</h2>
                      <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-12-15</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                      Please be informed that the Winter Break will begin on December 15, 2025. All students are requested to complete their assignments before the break.
                  </p>
              </div>
              <div className="bg-PurpleLight rounded-md p-4">
                  <div className="flex item-center justify-between">
                      <h2 className="font-medium">National Day Celebrations</h2>
                      <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-03-23</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                      We will be celebrating Pakistan&apos;s National Day on March 23, 2025. There will be special events throughout the day, including a parade and cultural performances.
                  </p>
              </div>
              <div className="bg-YellowLight rounded-md p-4">
                  <div className="flex item-center justify-between">
                      <h2 className="font-medium">Public Holiday - Eid ul Fitr</h2>
                      <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-04-21</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                      Eid ul Fitr will be celebrated on April 21, 2025. The school will remain closed for the holiday. Please check the school portal for further updates regarding the holiday schedule.
                  </p>
              </div>
          </div>
      </div>
    );
  }
  
  export default Announcement;
  