import { Injectable } from '@angular/core';
import Peer from 'peerjs';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  peer: any;

  constructor() {
    this.peer = new Peer(''+Math.floor(Math.random()*2**18).toString(36).padStart(4), {
      host: 'localhost',
      port: 3001,
      key: 'id1',
      secure: false,
      path: '/'
    });
  }
}
