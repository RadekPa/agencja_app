import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesCreateWithoutDictCustTypesInputObjectSchema as tblCustTypesCreateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesCreateWithoutDictCustTypesInput.schema';
import { tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema as tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUncheckedCreateWithoutDictCustTypesInput.schema';
import { tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema as tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema } from './tblCustTypesCreateOrConnectWithoutDictCustTypesInput.schema';
import { tblCustTypesCreateManyDictCustTypesInputEnvelopeObjectSchema as tblCustTypesCreateManyDictCustTypesInputEnvelopeObjectSchema } from './tblCustTypesCreateManyDictCustTypesInputEnvelope.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustTypesCreateWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesCreateWithoutDictCustTypesInputObjectSchema).array(), z.lazy(() => tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustTypesCreateManyDictCustTypesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustTypesUncheckedCreateNestedManyWithoutDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesUncheckedCreateNestedManyWithoutDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUncheckedCreateNestedManyWithoutDictCustTypesInput>;
export const tblCustTypesUncheckedCreateNestedManyWithoutDictCustTypesInputObjectZodSchema = makeSchema();
