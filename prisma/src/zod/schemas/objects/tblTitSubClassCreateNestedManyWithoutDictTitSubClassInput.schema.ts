import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedCreateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateOrConnectWithoutDictTitSubClassInput.schema';
import { tblTitSubClassCreateManyDictTitSubClassInputEnvelopeObjectSchema as tblTitSubClassCreateManyDictTitSubClassInputEnvelopeObjectSchema } from './tblTitSubClassCreateManyDictTitSubClassInputEnvelope.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema).array(), z.lazy(() => tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitSubClassCreateManyDictTitSubClassInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateNestedManyWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateNestedManyWithoutDictTitSubClassInput>;
export const tblTitSubClassCreateNestedManyWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
