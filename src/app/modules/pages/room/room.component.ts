import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeerService } from '../../services/peer.service';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  roomName: any;
  currentStream: any;
  listUser: Array<any> = [];

  constructor(private route: ActivatedRoute, private webSocketService: WebSocketService, private peerService: PeerService) {
    this.roomName = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.checkMediaDevices();
    this.initPeer();
    this.initSocket();
  }

  initPeer = () => {
    const peer = this.peerService.peer;
    peer.on('open', (id: any) => {
      console.log(id)
      const body = {
        idPeer: id,
        roomName: this.roomName
      }
      this.webSocketService.joinRoom(body);
    })  

    peer.on('call', (callEnter: any) => {
      callEnter.answer(this.currentStream);
      callEnter.on('stream', (streamRemote:any) => {
        // this.addVideoUser(streamRemote);
      })
    }, (error: any) => {
      console.log("Error peer call", error)
    })
  }

  initSocket = () => {
    this.webSocketService.cbEvent.subscribe((res: any) => {
      console.log("Socket", res)
    })
  }

  checkMediaDevices = () => {
    if(navigator && navigator.mediaDevices){
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).then(stream => {
        this.currentStream = stream;
        this.addVideoUser(stream);
      })
    }else{
      console.log("Error no permission");
    }
  }

  addVideoUser = (stream: any) => {
    this.listUser.push(stream);
  }
}
