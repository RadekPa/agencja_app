import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateWithoutTblTitlesInputObjectSchema as dictLanguagesCreateWithoutTblTitlesInputObjectSchema } from './dictLanguagesCreateWithoutTblTitlesInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblTitlesInput.schema';
import { dictLanguagesCreateOrConnectWithoutTblTitlesInputObjectSchema as dictLanguagesCreateOrConnectWithoutTblTitlesInputObjectSchema } from './dictLanguagesCreateOrConnectWithoutTblTitlesInput.schema';
import { dictLanguagesUpsertWithoutTblTitlesInputObjectSchema as dictLanguagesUpsertWithoutTblTitlesInputObjectSchema } from './dictLanguagesUpsertWithoutTblTitlesInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema as dictLanguagesUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema } from './dictLanguagesUpdateToOneWithWhereWithoutTblTitlesInput.schema';
import { dictLanguagesUpdateWithoutTblTitlesInputObjectSchema as dictLanguagesUpdateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUpdateWithoutTblTitlesInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictLanguagesCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  upsert: z.lazy(() => dictLanguagesUpsertWithoutTblTitlesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictLanguagesUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => dictLanguagesUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema)]).optional()
}).strict();
export const dictLanguagesUpdateOneWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateOneWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateOneWithoutTblTitlesNestedInput>;
export const dictLanguagesUpdateOneWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
