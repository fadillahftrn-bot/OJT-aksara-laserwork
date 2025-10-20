import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Upload, FileText, User, Briefcase } from "lucide-react";

export default function AddProfile() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    education: '',
    skills: '',
    summary: '',
    expectedSalary: ''
  });

  const [uploadedCV, setUploadedCV] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedCV(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, uploadedCV);
    alert('Profil berhasil disimpan!');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 -z-10 rounded-lg"></div>
        <h2 className="mb-2 pt-6 uppercase tracking-wide">Tambah Profil Kerja Saya</h2>
        <p className="text-muted-foreground">
          Lengkapi profil Anda untuk mendapatkan rekomendasi pekerjaan yang lebih baik
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Informasi Pribadi */}
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="bg-muted/30">
            <CardTitle className="flex items-center uppercase tracking-wide">
              <User className="h-5 w-5 mr-2 text-primary" />
              Informasi Pribadi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Nama Lengkap *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Nomor Telefon *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+62 xxx-xxxx-xxxx"
                  required
                />
              </div>
              <div>
                <Label htmlFor="location">Lokasi</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Kota, Provinsi"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informasi Profesional */}
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="bg-muted/30">
            <CardTitle className="flex items-center uppercase tracking-wide">
              <Briefcase className="h-5 w-5 mr-2 text-primary" />
              Informasi Profesional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience">Pengalaman Kerja</Label>
                <Select onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih pengalaman kerja" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fresh">Fresh Graduate</SelectItem>
                    <SelectItem value="1-2">1-2 Tahun</SelectItem>
                    <SelectItem value="3-5">3-5 Tahun</SelectItem>
                    <SelectItem value="5+">5+ Tahun</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="education">Pendidikan Terakhir</Label>
                <Select onValueChange={(value) => handleInputChange('education', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih pendidikan terakhir" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sma">SMA/SMK</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="s1">Sarjana (S1)</SelectItem>
                    <SelectItem value="s2">Magister (S2)</SelectItem>
                    <SelectItem value="s3">Doktor (S3)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="skills">Keahlian (pisahkan dengan koma)</Label>
              <Input
                id="skills"
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                placeholder="React, JavaScript, Python, SQL, etc."
              />
            </div>

            <div>
              <Label htmlFor="expectedSalary">Ekspektasi Gaji (Rp)</Label>
              <Input
                id="expectedSalary"
                value={formData.expectedSalary}
                onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
                placeholder="5000000"
              />
            </div>

            <div>
              <Label htmlFor="summary">Ringkasan Profesional</Label>
              <Textarea
                id="summary"
                value={formData.summary}
                onChange={(e) => handleInputChange('summary', e.target.value)}
                placeholder="Ceritakan tentang diri Anda, pengalaman, dan tujuan karir..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Upload CV */}
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="bg-muted/30">
            <CardTitle className="flex items-center uppercase tracking-wide">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Upload CV
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <div className="space-y-2">
                <p>Drag & drop CV Anda atau klik untuk browse</p>
                <p className="text-sm text-muted-foreground">
                  Format yang didukung: PDF, DOC, DOCX (Max. 5MB)
                </p>
              </div>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="cv-upload"
              />
              <Label htmlFor="cv-upload" className="cursor-pointer">
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Pilih File
                </Button>
              </Label>

              {uploadedCV && (
                <p className="mt-2 text-sm text-primary font-semibold">
                  File terpilih: {uploadedCV.name}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tombol Submit */}
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            Simpan Draft
          </Button>
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Simpan Profil
          </Button>
        </div>
      </form>
    </div>
  );
}
