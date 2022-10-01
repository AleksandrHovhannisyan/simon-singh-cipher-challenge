import { substitute } from "./utils";

// Stage 1: Simple Monoalphabetic Substitution Cipher
// https://simonsingh.net/cryptography/cipher-challenge/the-ciphertexts/stage-1/

const ciphertext =
  'BT JPX RMLX PCUV AMLX ICVJP IBTWXVR CI M LMT’R PMTN, MTN YVCJX CDXV MWMBTRJ JPX AMTNGXRJBAH UQCT JPX QGMRJXV CI JPX YMGG CI JPX HBTW’R QMGMAX; MTN JPX HBTW RMY JPX QMVJ CI JPX PMTN JPMJ YVCJX. JPXT JPX HBTW’R ACUTJXTMTAX YMR APMTWXN, MTN PBR JPCUWPJR JVCUFGXN PBL, RC JPMJ JPX SCBTJR CI PBR GCBTR YXVX GCCRXN, MTN PBR HTXXR RLCJX CTX MWMBTRJ MTCJPXV. JPX HBTW AVBXN MGCUN JC FVBTW BT JPX MRJVCGCWXVR, JPX APMGNXMTR, MTN JPX RCCJPRMEXVR. MTN JPX HBTW RQMHX, MTN RMBN JC JPX YBRX LXT CI FMFEGCT, YPCRCXDXV RPMGG VXMN JPBR YVBJBTW, MTN RPCY LX JPX BTJXVQVXJMJBCT JPXVXCI, RPMGG FX AGCJPXN YBJP RAM';

console.log(
  substitute(ciphertext, {
    // A quick frequency analysis shows that JPX appears 17 times in the text, suggesting it is "the", the most common three-letter word in English
    J: 't',
    P: 'h',
    X: 'e',
    // I tried various substitutions for "L", looking specifically at "LX" after above substitutions. After some trial and error, I decided that "?e" is likely "me"
    L: 'm',
    // R is a letter that starts RMLX = [RM]me and also a two-letter word, RC. Assuming our substitution for L is correct, then the most likely candidate for R is "s". Then M = a and the word is same. Seems promising!
    R: 's',
    // and "RC" suggests that C = o (the word "so")
    C: 'o',
    // From R = s RMLX = same
    M: 'a',
    // BT is another commonly occurring word. Likely "in"
    B: 'i',
    T: 'n',
    // anN = and. This is verified by the revelation of the word "hand", so we're on the right track!
    N: 'd',
    // aWainst, so W = g
    W: 'g',
    // Hing's => H = k (king's)
    H: 'k',
    // inteVQVetation => V = r and Q = p, interpretation
    V: 'r',
    Q: 'p',
    // Yrote => Y = w, wrote
    Y: 'w',
    // oDer => D = v, over
    D: 'v',
    // hoUr => U = u, hour
    U: 'u',
    // From here on out, the rest are much easier to deduce
    A: 'c',
    G: 'l',
    F: 'b',
    S: 'j',
    I: 'f',
    E: 'y',
  })
);

/* Resulting plaintext: 'in the same hour came forth fingers of a man’s hand, and wrote over against the candlestick upon the plaster of the wall of the king’s palace; and the king saw the part of the hand that wrote. then the king’s countenance was changed, and his thoughts troubled him, so that the joints of his loins were loosed, and his knees smote one against another. the king cried aloud to bring in the astrologers, the chaldeans, and the soothsayers. and the king spake, and said to the wise men of babylon, whosoever shall read this writing, and show me the interpretation thereof, shall be clothed with sca' */
