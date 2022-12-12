import React from 'react';
import styled from 'styled-components';

import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import sassLogo from '../assets/sassLogo.png';
import bootstrapLogo from '../assets/bootstrapLogo.png';
import jsLogo from '../assets/jsLogo.png';
import reactLogo from '../assets/reactLogo.png';
import firebaseLogo from '../assets/firebaseLogo.png';
import mysqlLogo from '../assets/mysqlLogo.png';
import sqlLogo from '../assets/sqlLogo.png';
import phpLogo from '../assets/phpLogo.png';
import javaLogo from '../assets/javaLogo.png';
import figmaLogo from '../assets/figmaLogo.png';
import gitLogo from '../assets/gitLogo.png';
import githubLogo from '../assets/githubLogo.png';

const SoftSkills = () => {

    return ( 
        <SoftSkillsContenedor className='container'>
            <section id='SoftSkills'>
                <div className='row'>
                    <h2>Soft Skills</h2>
                </div>

                <div className='row justify-content-center'>
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
                        <img src={reactLogo} alt="" className='img-fluid'/>
                    </div>
                </div>

                <div className='row justify-content-center'>
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
                        <img src={javaLogo} alt="" className='img-fluid'/>
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

        </SoftSkillsContenedor>
    );
}

const SoftSkillsContenedor = styled.div`
    padding: 80px 0;

    @media screen and (max-width: 575px){
        padding: 80px 25px;
    }

    h2{
        color:#2a2a2a;
    }
    img{
        /* width: 80px; */
        display: block;
        margin: auto;
    }
`;

export default SoftSkills;