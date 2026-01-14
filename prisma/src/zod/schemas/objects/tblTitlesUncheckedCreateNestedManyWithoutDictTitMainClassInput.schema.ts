import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictTitMainClassInput.schema';
import { tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateOrConnectWithoutDictTitMainClassInput.schema';
import { tblTitlesCreateManyDictTitMainClassInputEnvelopeObjectSchema as tblTitlesCreateManyDictTitMainClassInputEnvelopeObjectSchema } from './tblTitlesCreateManyDictTitMainClassInputEnvelope.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesCreateWithoutDictTitMainClassInputObjectSchema).array(), z.lazy(() => tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitlesCreateManyDictTitMainClassInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInput>;
export const tblTitlesUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
