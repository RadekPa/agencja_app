import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.literal(true).optional(),
  FirstName: z.literal(true).optional(),
  MiddleName: z.literal(true).optional(),
  LastName: z.literal(true).optional(),
  CompanyPosition: z.literal(true).optional(),
  Birthday: z.literal(true).optional(),
  Status: z.literal(true).optional(),
  Initials: z.literal(true).optional(),
  Phone: z.literal(true).optional(),
  MobilePhone: z.literal(true).optional(),
  Email: z.literal(true).optional(),
  Sex: z.literal(true).optional(),
  Street: z.literal(true).optional(),
  ZipCode: z.literal(true).optional(),
  City: z.literal(true).optional(),
  Country: z.literal(true).optional(),
  Remarks: z.literal(true).optional(),
  UserMod: z.literal(true).optional(),
  DateMod: z.literal(true).optional(),
  Nameday: z.literal(true).optional(),
  PersonID: z.literal(true).optional()
}).strict();
export const TblUsersMinAggregateInputObjectSchema: z.ZodType<Prisma.TblUsersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUsersMinAggregateInputType>;
export const TblUsersMinAggregateInputObjectZodSchema = makeSchema();
