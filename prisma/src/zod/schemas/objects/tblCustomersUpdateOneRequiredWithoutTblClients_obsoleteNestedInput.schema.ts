import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersCreateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema as tblCustomersCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUpsertWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUpsertWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUpsertWithoutTblClients_obsoleteInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUpdateWithoutTblClients_obsoleteInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblClients_obsoleteInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneRequiredWithoutTblClients_obsoleteNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblClients_obsoleteNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblClients_obsoleteNestedInput>;
export const tblCustomersUpdateOneRequiredWithoutTblClients_obsoleteNestedInputObjectZodSchema = makeSchema();
