import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteCreateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUncheckedCreateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema as tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteCreateOrConnectWithoutDictRepModesInput.schema';
import { tblClients_obsoleteCreateManyDictRepModesInputEnvelopeObjectSchema as tblClients_obsoleteCreateManyDictRepModesInputEnvelopeObjectSchema } from './tblClients_obsoleteCreateManyDictRepModesInputEnvelope.schema';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './tblClients_obsoleteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema).array(), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblClients_obsoleteCreateManyDictRepModesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema), z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblClients_obsoleteUncheckedCreateNestedManyWithoutDictRepModesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUncheckedCreateNestedManyWithoutDictRepModesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUncheckedCreateNestedManyWithoutDictRepModesInput>;
export const tblClients_obsoleteUncheckedCreateNestedManyWithoutDictRepModesInputObjectZodSchema = makeSchema();
