import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema';
import { dictAgrEventsArgsObjectSchema as dictAgrEventsArgsObjectSchema } from './dictAgrEventsArgs.schema'

const makeSchema = () => z.object({
  AgrEventID: z.boolean().optional(),
  AgrID: z.boolean().optional(),
  AgrEventCode: z.boolean().optional(),
  EventDate: z.boolean().optional(),
  NoOfCopies: z.boolean().optional(),
  EndDate: z.boolean().optional(),
  DateMod: z.boolean().optional(),
  UserMod: z.boolean().optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional(),
  dictAgrEvents: z.union([z.boolean(), z.lazy(() => dictAgrEventsArgsObjectSchema)]).optional()
}).strict();
export const tblAgrEventsSelectObjectSchema: z.ZodType<Prisma.tblAgrEventsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsSelect>;
export const tblAgrEventsSelectObjectZodSchema = makeSchema();
