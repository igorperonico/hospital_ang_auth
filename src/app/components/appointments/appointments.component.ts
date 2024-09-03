import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];
  newAppointment = { appointmentDate: '', patientName: '', doctorName: '', reason: '' };

  private apiUrl = 'http://localhost:8080/appointments';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.http.get<any[]>(this.apiUrl, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .subscribe(data => {
        this.appointments = data;
      });
  }

  createAppointment() {
    this.http.post(this.apiUrl, this.newAppointment, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .subscribe(() => {
        this.getAppointments();
      });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

}
