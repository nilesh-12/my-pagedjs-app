import './App.css'
import React from "react"


function App() {
  React.useEffect(() => {

    const preview = async () => {
    
    let previewer = new (await import('pagedjs')).Previewer()

      let content = document.querySelector("#content-container")
      let renderTo = document.querySelector("#render-container")
      previewer.preview(content, ['styles-print.css'], renderTo)

    }

    preview()
  }, [])

  let content = (
    <>
      <template id="content-container">

        <div>
          <div className="ratnaafin-logo">
            <img
              src="https://cdn-ilaefmd.nitrocdn.com/DBUJndesPTFwTzCLuOBIxpXlHnSzYMkC/assets/images/optimized/rev-ac99f1f/ratnaafin.com/wp-content/uploads/2023/07/cropped-RCPL-01.png"
              alt="Ratnaafin" />
          </div>

          <div className="statement-date">
            <strong>LOAN ACCOUNT STATEMENT</strong><br />
            <div style={{ fontSize: 12 }}>
              Statement Date: &lt;(DD/MM/YYYY)<br />
              A/c Number: &lt; numbers &gt;
            </div>
          </div>

          <div className="address-details">
            <p>
              RATNAAFIN CAPITAL PRIVATE LIMITED<br />
              CIN : U65929GJ2018PTC105279<br />
              Registered Office: 201-202, Shilp Aperia Corner, Ambli - Bopal
              Road,<br />
              Near Landmark Hotel, Ahmedabad, Gujarat 380052, India<br />
              Helpline : 1800 309 8010 | Mobile : 95120 11220 | Email :
              ops.nbfc@ratnaafin.com
            </p>
          </div>


          <table>
            <caption>Student Records</caption>
            <thead>
              <tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr>
            </thead>

            <tbody>
              <tr><td>Vimal</td><td>Jaiswal</td><td>70</td></tr>
              <tr><td>Mike</td><td>Warn</td><td>60</td></tr>
              <tr><td>Shane</td><td>Warn</td><td>42</td></tr>
              <tr><td>Jai</td><td>Malhotra</td><td>62</td></tr>
            </tbody>

            <tbody>
              <tr><td>Vimal</td><td>Jaiswal</td><td>70</td></tr>
              <tr><td>Mike</td><td>Warn</td><td>60</td></tr>
              <tr><td>Shane</td><td>Warn</td><td>42</td></tr>
              <tr><td>Jai</td><td>Malhotra</td><td>62</td></tr>
            </tbody>
          </table>

        </div>

      </template>
    </>
  )

  return <>
    <div id="render-container"></div>
    {content}
  </>
}

export default App
