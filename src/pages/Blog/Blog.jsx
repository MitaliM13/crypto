import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="intro">
        <h1 className="title">
          What is Cryptocurrency? <br /> A Beginner’s Guide to the Future of
          Finance
        </h1>
        <img
          src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="crypto"
        />
        <h4>
          In recent years, cryptocurrency has gone from a niche tech concept to
          a global financial phenomenon. But for many, it still feels like a
          mystery wrapped in jargon. If you're new to crypto or want a clearer
          understanding of how it works, this blog is for you.
        </h4>
      </div>
      <div className="para1">
        <h1 className="title">What is Cryptocurrency?</h1>
        <p>
          Cryptocurrency is a form of digital or virtual money that uses
          cryptography for security. Unlike traditional currencies issued by
          governments (also known as fiat currencies), cryptocurrencies operate
          on decentralized networks, typically using a technology called
          blockchain. A blockchain is a distributed ledger enforced by a network
          of computers (often called nodes). It records all transactions across
          the network in a secure, transparent, and immutable way.
        </p>
      </div>
      <div className="features">
        <ul>
          Key Features of Cryptocurrency
          <li>
            <strong>Decentralization</strong> No central bank or government
            controls it. The community governs it through consensus protocols.
          </li>
          <li>
            <strong>Security</strong>
            Transactions are encrypted and nearly impossible to alter once
            verified.
          </li>
          <li>
            <strong>Transparency</strong>
            Public blockchains like Bitcoin allow anyone to view the transaction
            history.
          </li>
          <li>
            <strong>Limited Supply</strong>
            Many cryptocurrencies have a capped supply, making them deflationary
            by nature (e.g., Bitcoin's maximum supply is 21 million coins).
          </li>
          <li>
            <strong>Global Transactions</strong>
            Crypto allows instant cross-border transactions without traditional
            banking fees or delays.
          </li>
        </ul>
      </div>
      <div className="popular">
        <ul>
          Popular Cryptocurrencies
          <li>
            <strong>Bitcoin(BTC)</strong>
            The first and most well-known cryptocurrency. Often referred to as
            "digital gold."
          </li>
          <li>
            <strong>Ethereum(ETC)</strong>
            Not just a currency but a platform for building decentralized apps
            (dApps) using smart contracts.
          </li>
          <li>
            <strong>Binance Coin (BNB), Solana (SOL), Cardano (ADA)</strong>
            Other notable cryptocurrencies with unique ecosystems and use-cases.
          </li>
        </ul>
      </div>
      <div className="usecase">
        <ul>
          Use Cases of Crypto
          <li>
            <strong>Payments</strong>
            Acceptable by some businesses as a means of payments
          </li>
          <li>
            <strong>Investments</strong>
            Seen as an alternative asset class with high return potential.
          </li>
          <li>
            <strong>Defi(Decentralized Finance)</strong>
            Financial services like lending, borrowing, and earning interest -
            without banks.
          </li>
          <li>
            <strong>NFTs</strong>
            Unique digital assets bought and sold on blockchain platforms.
          </li>
          <li>
            <strong>Web3</strong>
            Building a decentralized internet where the users control their own
            data
          </li>
        </ul>
      </div>
      <div className="safety">
        <h2>Is Cryptocurrency Safe?</h2>
        <p>
          While blockchain technology is secure, investing in crypto carries
          risks: Volatility: Prices can swing wildly. Regulatory Uncertainty:
          Governments are still defining how to regulate it. Security Risks: If
          you lose your private keys or fall for scams, your assets can be
          unrecoverable. <strong>Always do your own research (DYOR) </strong>and
          consider storing your crypto in a <b>hardware wallet</b> for extra
          protection.
        </p>
      </div>
      <div className="final">
        <h3>Final Thoughts</h3>
        <p>
          Cryptocurrency is more than just a trend—it's a glimpse into the
          future of money, technology, and decentralization. Whether you're
          looking to invest, build, or simply learn, now is a great time to
          explore this rapidly evolving world. Stay informed, stay safe, and
          welcome to the crypto revolution!
        </p>
      </div>
    </div>
  );
};

export default Blog;
