import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUpdateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteCreateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUncheckedCreateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './tblClients_obsoleteWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema)]),
  where: z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).optional()
}).strict();
export const tblClients_obsoleteUpsertWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUpsertWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpsertWithoutTblCustomersInput>;
export const tblClients_obsoleteUpsertWithoutTblCustomersInputObjectZodSchema = makeSchema();
