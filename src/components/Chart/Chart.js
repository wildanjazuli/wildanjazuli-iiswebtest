import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Chart.module.scss';

const Chart = () => (
  <div>
    <div className={styles.Header}>
      <h1>Charts and Table Visualization</h1>
    </div>
    <div className={styles.Body}>
      <div className={styles.PrimaryChart}>
        <div>
          <h2>Chart 1</h2>
          <div class={styles.wrap}>
            <div class={styles.holder}>
              <div class={`${styles.bar} ${styles.cf}`} style={{width: '85%'}} data-percent="85%">
                <span class={styles.label}>May</span>
                <span class={styles.count}></span>
              </div>
              <div class={`${styles.bar} ${styles.cf}`} style={{width: '75%'}} data-percent="75%">
                <span class={`${styles.label} ${styles.light}`}>April</span>
                <span class={styles.count}></span>
              </div>
              <div class={`${styles.bar} ${styles.cf}`} style={{width: '65%'}} data-percent="65%">
                <span class={styles.label}>Maret</span>
                <span class={styles.count}></span>
              </div>
              <div class={`${styles.bar} ${styles.cf}`} style={{width: '90%'}} data-percent="90%">
                <span class={`${styles.label} ${styles.light}`}>Februari</span>
                <span class={styles.count}></span>
              </div>
              <div class={`${styles.bar} ${styles.cf}`} style={{width: '90%'}} data-percent="90%">
                <span class={styles.label}>Januari</span>
                <span class={styles.count}></span>
              </div>
              <div className={styles.numberChart}>
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2>Chart 2</h2>

        </div>
      </div>
      <div className={styles.listCheck}>
        <div className={styles.item}>
          <div style={{width: '5%'}}><input type='checkbox' /></div>
          <div style={{width: '22.5%'}}>Table 01</div>
          <div style={{width: '22.5%'}}>Category 01</div>
          <div style={{width: '22.5%'}}>Vailable</div>
          <div style={{width: '22.5%'}}>Arrived</div>
        </div>
        <div className={styles.item}>
          <div style={{width: '5%'}}><input type='checkbox' /></div>
          <div style={{width: '22.5%'}}>Table 01</div>
          <div style={{width: '22.5%'}}>Category 01</div>
          <div style={{width: '22.5%'}}>Vailable</div>
          <div style={{width: '22.5%'}}>Arrived</div>
        </div>
        <div className={styles.item}>
          <div style={{width: '5%'}}><input type='checkbox' /></div>
          <div style={{width: '22.5%'}}>Table 01</div>
          <div style={{width: '22.5%'}}>Category 01</div>
          <div style={{width: '22.5%'}}>Vailable</div>
          <div style={{width: '22.5%'}}>Arrived</div>
        </div>
      </div>
    </div>
  </div>
);

Chart.propTypes = {};

Chart.defaultProps = {};

export default Chart;
