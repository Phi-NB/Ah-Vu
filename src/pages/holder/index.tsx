import type { NextPage } from 'next'
import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { getExampleDataUrl, obj } from 'api/api'
import { LooseObject } from 'interfaces'
import Footer from 'components/Footer/Footer'
import Something from 'components/Something/Something'
import path from "path";
import fsPromises from "fs/promises";

type HolderProps = {
    data: LooseObject;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/json/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  return {
    props: { data: objectData },
  };
}

const Holder: NextPage<HolderProps> = ({ data = { text: 'Holder' } }) => {

    console.log(data[obj]?.financials);
    
    return (
        <React.Fragment>
            <main>
                <Something data={data} />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Holder
