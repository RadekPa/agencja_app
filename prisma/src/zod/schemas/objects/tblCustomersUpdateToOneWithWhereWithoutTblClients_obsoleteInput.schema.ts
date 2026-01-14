import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUpdateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblClients_obsoleteInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
