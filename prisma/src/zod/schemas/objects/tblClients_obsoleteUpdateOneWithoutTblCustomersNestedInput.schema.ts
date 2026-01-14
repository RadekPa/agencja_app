import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteCreateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUncheckedCreateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteCreateOrConnectWithoutTblCustomersInputObjectSchema as tblClients_obsoleteCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteCreateOrConnectWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUpsertWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUpsertWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUpsertWithoutTblCustomersInput.schema';
import { tblClients_obsoleteWhereInputObjectSchema as tblClients_obsoleteWhereInputObjectSchema } from './tblClients_obsoleteWhereInput.schema';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './tblClients_obsoleteWhereUniqueInput.schema';
import { tblClients_obsoleteUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUpdateToOneWithWhereWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUpdateWithoutTblCustomersInput.schema';
import { tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblClients_obsoleteCreateOrConnectWithoutTblCustomersInputObjectSchema).optional(),
  upsert: z.lazy(() => tblClients_obsoleteUpsertWithoutTblCustomersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblClients_obsoleteWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblClients_obsoleteWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblClients_obsoleteUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblClients_obsoleteUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedUpdateWithoutTblCustomersInputObjectSchema)]).optional()
}).strict();
export const tblClients_obsoleteUpdateOneWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUpdateOneWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpdateOneWithoutTblCustomersNestedInput>;
export const tblClients_obsoleteUpdateOneWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
