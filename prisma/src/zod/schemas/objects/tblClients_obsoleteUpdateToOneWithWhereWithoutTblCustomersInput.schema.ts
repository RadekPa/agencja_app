import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './tblClients_obsoleteWhereInput.schema';
import { tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUpdateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblClients_obsoleteUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUpdateToOneWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpdateToOneWithWhereWithoutTblCustomersInput>;
export const tblClients_obsoleteUpdateToOneWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
