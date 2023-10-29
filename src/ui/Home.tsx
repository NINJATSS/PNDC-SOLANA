import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          PNDC SOLANA
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          Welcome to PNDC solana casino, 100% of the funds will be used to buy $PNDC and airdrop to holders. ( HOLDING A MIN OF 100B PNDC )
ENJOY AND DON'T GAMBLE WITH MORE THEN YOU CAN AFFORD TO LOSE
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://gamba.so"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Learn more 
          </Button>
        </div>
      </Section>
    </div>
  )
}
