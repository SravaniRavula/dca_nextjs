import content from '../data.content';
import Sidebar from '../components/Sidebar'
import styles from '../styles/Styles.module.css'




export default function BannedDrugs() {
  return (
      <>
      <div className="Content__Background">
        {
          content.BannedDrugs.map((information) => 
          <section className="container">
              <div className="row">
                 <section className="col-lg-8 p-4 ">
                   <div className={styles.content}>

                   
                    <h3 className=" contnt m-3">{information.heading}</h3> 
                    <h6>{information.subheader} </h6>   
                    {
                        information.detailservices.map((content) => 
                        <div>
                            <h4 className={styles.subheader1}>{content.header}</h4>
                               <section>
                                  {
                                    content.paragraph.map((detail) => 
                                    <ul>
                                        <li className={styles.subheader2}>{detail.p}</li>                                                        
                                      </ul>
                                    ) 
                                    }
                                </section>                                                           
                         </div>
                        )  
                }     
                </div>                  
                 </section>
                 <secton className="col-lg-4">
                    <Sidebar />
                  </secton>

               </div>
            </section> 
          ) 
        }
       
      </div>
        
      </>
  ); 
}