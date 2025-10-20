                      <p className="text-muted-foreground">
                        +62 812-3456-7890<br />
                        (Senin - Sabtu, 08.00–17.00)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#dd7311] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#dd7311]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#dd7311]" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2 font-normal">Email</h4>
                      <p className="text-muted-foreground">
                        info@aksaralaserwork.co.id<br />
                        support@aksaralaserwork.co.id
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#dd7311] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#dd7311]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#dd7311]" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2 font-normal">Jam Operasional</h4>
                      <p className="text-muted-foreground">
                        Senin – Sabtu<br />
                        08.00 – 17.00 WIB
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#3d4451] text-white py-6 mt-12">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Aksara Laserwork. Semua hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
