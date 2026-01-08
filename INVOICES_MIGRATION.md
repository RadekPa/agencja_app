# Migracja modułu faktury do tblFraVAT_New

## Zmianę wykonane - 8 stycznia 2026

### 1. Model Prisma (`prisma/schema.prisma`)
✅ Zaktualizowany model `Invoice` z mapowaniem na tabelę `tblFraVAT_New`:
- Zmieniono klucz główny z `id @default(autoincrement())` na `id @id @map("FVNr")`
- Dodane wszystkie 32 pola z tabeli SQL Server
- Mapowanie polów: `FVNr`, `FVDate`, `CustID`, `NetAmt`, `VatAmt`, `GrossAmt`, itp.
- Przywrócona relacja `client: Customer`

### 2. API Routes

#### `/api/invoices` (Lista i tworzenie)
✅ `GET` - pobiera listę faktur z nowym schematem:
- Zmieniono sortowanie: `issueDate` → `date`
- Zmieniono pola zwracane: `net` → `netAmt`, `vat` → `vatAmt`, `gross` → `grossAmt`, `issueDate` → `date`, `paymentDate` → `payDate`
- Obsługa `status` (ISSUED/DRAFT zamiast issued/planned)

✅ `POST` - tworzenie nowej faktury:
- Nowe parametry: `date`, `payDate`, `netAmt`, `vatPerc`
- Automatyczne obliczanie `vatAmt` i `grossAmt`
- Obsługa `invType` (FV, RR, KOR, etc.)

#### `/api/invoices/[id]` (Szczegóły i aktualizacja)
✅ `GET` - zwraca szczegóły faktury z wszystkimi polami:
- Zwraca: `netAmt`, `vatAmt`, `grossAmt`, `invType`, `fvDescription`, `payType`, `vatCode`

✅ `PATCH` - aktualizacja statusu:
- Nowe statusy: DRAFT, ISSUED (zamiast planned, issued)

### 3. Widoki React

#### Lista faktur (`src/app/(protected)/invoices/page.tsx`)
✅ Zaktualizowany komponent:
- Zmieniono typ Invoice: stare pola → nowe pola
- Formularz tworzenia: `issueDate`, `paymentDate`, `net`, `vat` → `date`, `payDate`, `netAmt`, `vatPerc`
- Dodane pole `invType` (Faktura VAT, Rachunek, Korekta)
- Zmienione statusy w SELECT-ach
- Wyświetlanie brutto (`grossAmt`)

#### Szczegóły faktury (`src/app/(protected)/invoices/[id]/page.tsx`)
✅ Całkowicie przepisany komponent:
- Wyświetla `invType` z labelą (Faktura VAT, Rachunek, Korekta, itp.)
- Sekcja z danymi klienta
- Sekcja z datami (data wystawienia, data wydania, termin zapłaty)
- Sekcja finansowa: Netto, Stawka VAT, VAT, Brutto
- Dodatkowe pola: Opis, Rodzaj płatności, Kod VAT

### 4. Migracja Bazy Danych
✅ Nowa migracja: `20260108_migrate_to_tblFraVAT_New/migration.sql`
- Usunięcie starej tabeli `Invoice`
- Mapowanie do istniejącej tabeli `tblFraVAT_New`
- Dodane indeksy dla szybkości:
  - `idx_tblFraVAT_New_CustID` - dla połączeń z klientami
  - `idx_tblFraVAT_New_FVDate` - dla filtrowania po dacie
  - `idx_tblFraVAT_New_Status` - dla filtrowania po statusie

## Jak wdrożyć

```bash
# Zaaktualizuj Prisma Client
npm run db:generate

# Wykonaj migrację (UWAGA: jeśli istniały dane, mogą być usunięte)
npm run db:migrate

# Uruchom aplikację
npm run dev
```

## Dostępne pola faktury

| Pole | Typ | Opis |
|------|-----|------|
| `id` (FVNr) | INT | ID faktury (klucz główny) |
| `date` (FVDate) | DateTime | Data wystawienia faktury |
| `dateIssued` (FVDateIssued) | DateTime | Data wydania faktury |
| `type` (FVType) | SmallInt | Typ operacji |
| `clientId` (CustID) | INT | ID klienta |
| `netAmt` (NetAmt) | Money | Kwota netto |
| `vatPerc` (VatPerc) | Money | Procent VAT |
| `vatAmt` (VatAmt) | Money | Kwota VAT |
| `grossAmt` (GrossAmt) | Money | Kwota brutto |
| `invType` (InvType) | NVarChar | Typ faktury (FV, RR, KOR, ZAL, REC) |
| `title` (Title) | NVarChar | Tytuł/numer faktury |
| `payDate` (PayDate) | Date | Termin zapłaty |
| `status` (Status) | NChar | Status (ISSUED, DRAFT) |
| `fvDescription` (FVDescription) | NVarChar | Opis faktury |
| `payType` (PayType) | NVarChar | Rodzaj płatności |
| `vatCode` (VATCode) | NVarChar | Kod VAT |

## Statusy i Typy Faktur

### Statusy
- `ISSUED` - Wystawiona
- `DRAFT` - Wersja robocza

### Typy Faktur
- `FV` - Faktura VAT
- `RR` - Rachunek
- `KOR` - Korekta
- `ZAL` - Zaliczka
- `REC` - Wznowienie VAT
