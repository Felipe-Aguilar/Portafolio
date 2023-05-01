
import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.webp';
import sassLogo from '../assets/sassLogo.webp';
import bootstrapLogo from '../assets/bootstrapLogo.webp';
import jsLogo from '../assets/jsLogo.webp';
import tsLogo from '../assets/tsLogo.png';
import reactLogo from '../assets/reactLogo.webp';
import firebaseLogo from '../assets/firebaseLogo.png';
import mysqlLogo from '../assets/mysqlLogo.webp';
import sqlLogo from '../assets/sqlLogo.webp';
import phpLogo from '../assets/phpLogo.webp';
import figmaLogo from '../assets/figmaLogo.png';
import gitLogo from '../assets/gitLogo.webp';
import githubLogo from '../assets/githubLogo.png';

const Skills = () => {
    return ( 
        <div className="container skills">
            <section id="SoftSkills">
                <div className="row">
                    <div>
                        <h2>Soft Skills</h2>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className='col-6 col-md-2'>
                            <img src={htmlLogo} alt="" className='img-fluid'/>
                        </div>
                        <div className='col-6 col-md-2'>
                            <img src={cssLogo} alt="" className='img-fluid'/>
                        </div>
                        <div className='col-6 col-md-2'>
                            <img src={sassLogo} alt="" className='img-fluid'/>
                        </div>
                        <div className='col-6 col-md-2'>
                            <img src={bootstrapLogo} alt="" className='img-fluid'/>
                        </div>
                        <div className='col-6 col-md-2'>
                            <img src={jsLogo} alt="" className='img-fluid'/>
                        </div>
                        <div className='col-6 col-md-2'>
                            <img src={tsLogo} alt="" className='img-fluid'/>
                        </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-6 col-md-2'>
                        <img src={reactLogo} alt="" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-md-2'>
                        <img src={firebaseLogo} alt="" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-md-2'>
                        <img src={mysqlLogo} alt="" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-md-2'>
                        <img src={sqlLogo} alt="" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-md-2'>
                        <img src={phpLogo} alt="" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-md-2'>
                        <img src={figmaLogo} alt="" className='img-fluid'/>
                    </div>
                </div>


                <div className='row justify-content-center'>
                    <div className='col-6 col-md-2'>
                        <img src={gitLogo} alt="" className='img-fluid'/>
                    </div>
                    <div className='col-6 col-md-2'>
                        <img src={githubLogo} alt="" className='img-fluid'/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;