import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUpdateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersCreateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblClients_obsoleteInput>;
export const tblCustomersUpsertWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
